//Maps database/API smoking status keys to user-friendly display labels.
export const getSmokingStatusLabel = (status?: string): string => {
  switch (status) {
    case 'smoking':
      return 'Has smoking';
    case 'no smoking':
      return 'Has no smoking';
    case 'unknown':
    default:
      return 'Not yet reviewed';
  }
};