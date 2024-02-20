import React from 'react'

const Chores = () => {
    const weeklyTasks = [
        "Doing the Dishes", "Take out the Trash", "Doing the Laundry", 
        "Bed Cleaning", "Grocery Shopping", "Vacuuming", "Bathroom Cleaning"
      ];
      const monthlyTasks = [
        "Deep cleaning", "Appliance maintenance", "Budget review", 
        "Closet Organizing", "Garden/Outdoor Maintenance", "Vacuuming", 
        "Bathroom Cleaning"
      ];
      
      const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
      // Helper function to render select options
      const renderSelect = () => (
        <select>
          <option value=""></option>
          <option value="no">❌</option>
          <option value="yes">✅</option>
        </select>
      );
    
      // Helper function to render a weekly task row
      const renderWeeklyTaskRow = (task) => (
        <tr key={task}>
          <td>{task}</td>
          {daysOfWeek.map(day => (
            <td key={day}>{renderSelect()}</td>
          ))}
        </tr>
      );
    
      // Helper function to render a monthly task row
      const renderMonthlyTaskRow = (task) => (
        <tr key={task}>
          <td>{task}</td>
          <td>{renderSelect()}</td>
           {/* Placeholder for the rest of the cells */}
        </tr>
      );

  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <div>
      <h2 className='mb-2'>Weekly</h2>
      <table className='mb-12'>
        <thead>
          <tr>
            <th>Tasks</th>
            {daysOfWeek.map(day => <th key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {weeklyTasks.map(task => renderWeeklyTaskRow(task))}
        </tbody>
      </table>

      <h2 className='mb-2'>Monthly</h2>
      <table className='mb-12'>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Done?</th>
            
          </tr>
        </thead>
        <tbody>
          {monthlyTasks.map(task => renderMonthlyTaskRow(task))}
        </tbody>
      </table>
    </div>  
    </div>
  )
}

export default Chores
