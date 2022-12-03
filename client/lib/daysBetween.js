export default function calculatedDays (thisDate) {
  const difference = (new Date() - new Date(thisDate)) / (1000 * 3600 * 24)
  if (difference < 1) return 'Today'
  if (difference > 1 && difference < 2) return '1 day ago'
  return Math.ceil(difference) + ' days ago'
}