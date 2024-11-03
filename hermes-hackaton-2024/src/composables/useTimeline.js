export default function () {
  const timelineArr = [
    {
      day: 'Day 1',
      date: '2024-11-04',
      timeline: [
        { time: '09:00', description: 'Welcome' },
        { time: '10:00', description: 'Presentation' },
        { time: '11:30', description: 'Brainstorming' },
        { time: '12:00', description: 'CODING' },
        { time: '14:00', description: 'Lunch' },
        { time: '16:00', description: 'Mentoring' },
        { time: '19:00', description: 'Private Mentoring' },
        { time: '21:00', description: 'Dinner' },
        { time: '00:00', description: 'Activities' },
        { time: '00:30', description: 'Altceva tatica' },
      ],
    },
    {
      day: 'Day 2',
      date: '2024-11-05',
      timeline: [
        { time: '08:00', description: 'Energizer' },
        { time: '09:00', description: 'Breakfast' },
        { time: '11:00', description: 'Mentoring' },
        { time: '14:00', description: 'STOP CODE' },
        { time: '14:00', description: 'Lunch Break' },
        { time: '15:00', description: 'Demo' },
        { time: '15:30', description: 'Presentations' },
        { time: '17:30', description: 'Awards' },
      ],
    },
  ]

  return {
    timelineArr,
  }
}
