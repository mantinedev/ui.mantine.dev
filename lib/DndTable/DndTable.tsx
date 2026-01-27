import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconGripVertical } from '@tabler/icons-react';
import { Table, VisuallyHidden } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import classes from './DndTable.module.css';

const data = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

interface RowProps {
  item: (typeof data)[number];
}

function SortableRow({ item }: RowProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.symbol,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Table.Tr ref={setNodeRef} style={style} className={classes.item} {...attributes}>
      <Table.Td>
        <div className={classes.dragHandle} {...listeners}>
          <IconGripVertical size={18} stroke={1.5} />
        </div>
      </Table.Td>
      <Table.Td w={80}>{item.position}</Table.Td>
      <Table.Td w={120}>{item.name}</Table.Td>
      <Table.Td w={80}>{item.symbol}</Table.Td>
      <Table.Td>{item.mass}</Table.Td>
    </Table.Tr>
  );
}

export function DndTable() {
  const [state, handlers] = useListState(data);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }
    const oldIndex = state.findIndex((i) => i.symbol === active.id);
    const newIndex = state.findIndex((i) => i.symbol === over.id);
    handlers.setState(arrayMove(state, oldIndex, newIndex));
  };

  return (
    <Table.ScrollContainer minWidth={420}>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={40}>
                <VisuallyHidden>Drag handle</VisuallyHidden>
              </Table.Th>
              <Table.Th w={80}>Position</Table.Th>
              <Table.Th w={120}>Name</Table.Th>
              <Table.Th w={40}>Symbol</Table.Th>
              <Table.Th>Mass</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <SortableContext
            items={state.map((i) => i.symbol)}
            strategy={verticalListSortingStrategy}
          >
            <Table.Tbody>
              {state.map((item) => (
                <SortableRow key={item.symbol} item={item} />
              ))}
            </Table.Tbody>
          </SortableContext>
        </Table>
      </DndContext>
    </Table.ScrollContainer>
  );
}
