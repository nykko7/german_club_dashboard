// ----------------------------------------------------------------------

export function emptyRows(page: number, rowsPerPage: number, arrayLength: number) {
  return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

const rolesOrder = [
  'president',
  'vice_president',
  'secretary',
  'treasurer',
  'board_member',
  'honor_advisor',
  'honor_member',
  'member',
];

const fullName = (item: any) => `${item.firstName} ${item.lastName} ${item.secondSurname}`;

const findRoleIndex = (item: any) => rolesOrder.indexOf(item.role);

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (orderBy === 'fullName') {
    if (fullName(b) < fullName(a)) {
      return -1;
    }
    if (fullName(b) > fullName(a)) {
      return 1;
    }
  } else if (orderBy === 'role') {
    if (findRoleIndex(b) < findRoleIndex(a)) {
      return -1;
    }
    if (findRoleIndex(b) > findRoleIndex(a)) {
      return 1;
    }
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: 'asc' | 'desc',
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
