import React from 'react'

const Moving_Out = () => {
    const bedroomItems = [
        "Bed(Frame)", "Cushion", "Matras", "Pillowcase",
        "Mattress Covers", "Thrash Bin", "Mattress Concierge", "Laundry Rack",
        "Desk", "Closet", "Office Chair", "Bank/Sofa",
        "Duvet Cover", "......"
      ];
    
      const kitchenItems = [
        "Pans", "Dishwashing Brush or Sponge", "Ladle", "Plates and Bowls",
        "Spatula", "Mugs and Glasses", "Whisk", "Cutlery",
        "Cheese Slicer", "Hand & Tea Towels", "Potato Peeler", "Cleaning Wipes",
        "Oven Gloves", "Cutting Board", "Cling Film", "Cutting Knife",
        "Measuring Cup", "Scale", "Detergent", "......"
      ];
    
      const bathroomItems = [
        "Toilet Paper", "Toothbrushs and Paste", "Rubber Bands and Pegs", "Shampoo and Conditioner",
        "All-purpose Cleaner", "......"
      ];
    
      // Helper function to render select options
      const renderSelect = () => (
        <select>
          <option value=""></option>
          <option value="no">❌</option>
          <option value="yes">✅</option>
        </select>
      );
    
      // Helper function to render a single table
      const renderTable = (items, category) => (
        <div style={{ marginBottom: '50px' }}> {/* Adjust the margin as needed */}
          <h2>{category}</h2>
          <table>
            <tbody>
              {items.map((item, index) => (
                index % 2 === 0 ? (
                  <tr key={item}>
                    <td>{items[index]}</td>
                    <td>{renderSelect()}</td>
                    {index + 1 < items.length ? (
                      <>
                        <td>{items[index + 1]}</td>
                        <td>{renderSelect()}</td>
                      </>
                    ) : (
                      <>
                        <td></td>
                        <td></td>
                      </>
                    )}
                  </tr>
                ) : null
              ))}
            </tbody>
          </table>
        </div>
      );
    
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <div className=''>
      {renderTable(bedroomItems, 'Bedroom')}
      {renderTable(kitchenItems, 'Kitchen')}
      {renderTable(bathroomItems, 'Bathroom')}
    </div>
    </div>
  )
}

export default Moving_Out
