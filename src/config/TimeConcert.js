export const getCurrentDate = () => {
    const today = new Date();
    const currentHour = today.getHours();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Check if it's already evening
    if (currentHour >= 12) {
      return formatDateString(tomorrow);
    } else {
      return formatDateString(today);
    }
  };

  const formatDateString = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    return `${month} ${day}`;
  };