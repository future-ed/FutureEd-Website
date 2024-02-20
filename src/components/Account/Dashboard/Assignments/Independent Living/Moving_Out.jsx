import React, { useState } from 'react'

const Moving_Out = () => {
  const [bedroomItems, setBedroomItems] = useState([
    { name: "Bed(Frame)", selected: "", isAdded: false },
    { name: "Duvet Cover", selected: "", isAdded: false },
    { name: "Pillowcase x 4", selected: "", isAdded: false },
    { name: "Mattress", selected: "", isAdded: false },
    { name: "Blanket", selected: "", isAdded: false },
    { name: "Trash Bin", selected: "", isAdded: false },
    { name: "Mattress Covers", selected: "", isAdded: false },
    { name: "Guest Blanket", selected: "", isAdded: false },
    { name: "Clothes", selected: "", isAdded: false },
    { name: "Blanket sheet x2", selected: "", isAdded: false },
    { name: "Cushion x2", selected: "", isAdded: false },
    { name: "Clothing Rack", selected: "", isAdded: false },
    { name: "Fitted sheet", selected: "", isAdded: false },
    { name: "Closet", selected: "", isAdded: false },
    { name: "Laundry Rack", selected: "", isAdded: false }
  ]);
  
  const [workspaceItems, setWorkspaceItems] = useState([
    { name: "Desk", selected: "", isAdded: false },
    { name: "Computer / Laptop", selected: "", isAdded: false },
    { name: "Extension Cord", selected: "", isAdded: false },
    { name: "Office chair", selected: "", isAdded: false },
    { name: "Chargers", selected: "", isAdded: false },
    { name: "Laptop holder", selected: "", isAdded: false },
    { name: "Monitor", selected: "", isAdded: false },
    { name: "Headphones", selected: "", isAdded: false },
    { name: "Pen & Paper", selected: "", isAdded: false }
  ]);
  
  const [kitchenItems, setKitchenItems] = useState([
    { name: "Pans", selected: "", isAdded: false },
    { name: "Dishwashing Brush x 2", selected: "", isAdded: false },
    { name: "Dishwasher Tablet", selected: "", isAdded: false },
    { name: "Ladle", selected: "", isAdded: false },
    { name: "Plates and Bowls", selected: "", isAdded: false },
    { name: "Drying cloth plates", selected: "", isAdded: false },
    { name: "Spatula", selected: "", isAdded: false },
    { name: "Mugs and Glasses", selected: "", isAdded: false },
    { name: "Drying cloth hands x3", selected: "", isAdded: false },
    { name: "Whisk", selected: "", isAdded: false },
    { name: "Cutlery", selected: "", isAdded: false },
    { name: "Drying cloth Dirt x4", selected: "", isAdded: false },
    { name: "Cheese Slicer", selected: "", isAdded: false },
    { name: "Kitchen roll", selected: "", isAdded: false },
    { name: "Kitchen cloth", selected: "", isAdded: false },
    { name: "Potato Peeler", selected: "", isAdded: false },
    { name: "Cleaning Wipes", selected: "", isAdded: false },
    { name: "Peeler", selected: "", isAdded: false },
    { name: "Oven Gloves", selected: "", isAdded: false },
    { name: "Cutting Board", selected: "", isAdded: false },
    { name: "Garbage bags", selected: "", isAdded: false },
    { name: "Cling Film", selected: "", isAdded: false },
    { name: "Cutting Knife", selected: "", isAdded: false },
    { name: "Water cooker", selected: "", isAdded: false },
    { name: "Measuring Cup", selected: "", isAdded: false },
    { name: "Scale", selected: "", isAdded: false },
    { name: "Napkins", selected: "", isAdded: false },
    { name: "Detergent", selected: "", isAdded: false },
    { name: "Corkscrew", selected: "", isAdded: false },
    { name: "Blender", selected: "", isAdded: false }
  ]);
  
  const [bathroomItems, setBathroomItems] = useState([
    { name: "Toilet Paper", selected: "", isAdded: false },
    { name: "Toothbrush", selected: "", isAdded: false },
    { name: "Nail clipper", selected: "", isAdded: false },
    { name: "Rubber Bands and Pegs", selected: "", isAdded: false },
    { name: "Shampoo", selected: "", isAdded: false },
    { name: "Towels x10", selected: "", isAdded: false },
    { name: "All-purpose Cleaner", selected: "", isAdded: false },
    { name: "Conditioner", selected: "", isAdded: false },
    { name: "Toothpaste", selected: "", isAdded: false },
    { name: "Shaver", selected: "", isAdded: false },
    { name: "Shaving cream", selected: "", isAdded: false },
    { name: "Perfume", selected: "", isAdded: false },
    { name: "Skin care", selected: "", isAdded: false },
    { name: "Hair products", selected: "", isAdded: false },
    { name: "Hair dryer", selected: "", isAdded: false },
    { name: "Air freshener", selected: "", isAdded: false },
    { name: "Toilet-seat cleaner", selected: "", isAdded: false },
    { name: "Bathroom Rug x3", selected: "", isAdded: false },
    { name: "Tooth picks", selected: "", isAdded: false },
    { name: "Laundry basket", selected: "", isAdded: false },
    { name: "Scissors", selected: "", isAdded: false }
  ]);

  const [sportItems, setSportItems] = useState([
    { name: "Gym clothes", selected: "", isAdded: false },
    { name: "Gym bag", selected: "", isAdded: false },
    { name: "Creatine", selected: "", isAdded: false },
    { name: "Gym towel", selected: "", isAdded: false },
    { name: "Gym equipment", selected: "", isAdded: false },
    { name: "Protein powder", selected: "", isAdded: false },
    { name: "Sportshoes", selected: "", isAdded: false },
    { name: "Gloves", selected: "", isAdded: false }
  ]);
  
  const [groceryItems, setGroceryItems] = useState([
    { name: "Pasta", selected: "", isAdded: false },
    { name: "Soup", selected: "", isAdded: false },
    { name: "Basil", selected: "", isAdded: false },
    { name: "Rice", selected: "", isAdded: false },
    { name: "Noodles", selected: "", isAdded: false },
    { name: "Ketchup", selected: "", isAdded: false },
    { name: "Oats", selected: "", isAdded: false },
    { name: "Sauces", selected: "", isAdded: false },
    { name: "Mustard", selected: "", isAdded: false },
    { name: "Salt & Pepper", selected: "", isAdded: false },
    { name: "Beans", selected: "", isAdded: false },
    { name: "Mayonnaise", selected: "", isAdded: false },
    { name: "Flour", selected: "", isAdded: false },
    { name: "Garlic powder", selected: "", isAdded: false },
    { name: "Soy sauce", selected: "", isAdded: false },
    { name: "Cooking oil", selected: "", isAdded: false },
    { name: "Onion powder", selected: "", isAdded: false },
    { name: "Hot sauce", selected: "", isAdded: false },
    { name: "Fruits", selected: "", isAdded: false },
    { name: "Paprika", selected: "", isAdded: false },
    { name: "Honey", selected: "", isAdded: false },
    { name: "Vegetables", selected: "", isAdded: false },
    { name: "Cumin", selected: "", isAdded: false },
    { name: "Snacks", selected: "", isAdded: false },
    { name: "Meat and Fish", selected: "", isAdded: false },
    { name: "Italian seasoning", selected: "", isAdded: false },
    { name: "Breakfast Items", selected: "", isAdded: false },
    { name: "Water", selected: "", isAdded: false },
    { name: "Oregano", selected: "", isAdded: false },
    { name: "Drinks", selected: "", isAdded: false }
  ]);
  
  const [housefurnitureItems, setHouseFurnitureItems] = useState([
    { name: "Bank/Sofa + Pillows", selected: "", isAdded: false },
    { name: "Dryer", selected: "", isAdded: false },
    { name: "Lamps", selected: "", isAdded: false },
    { name: "Washer", selected: "", isAdded: false },
    { name: "Dishwasher", selected: "", isAdded: false },
    { name: "Blanket", selected: "", isAdded: false },
    { name: "Dining table and chairs", selected: "", isAdded: false },
    { name: "Storage shelves or cabinets", selected: "", isAdded: false },
    { name: "TV + Stand", selected: "", isAdded: false },
    { name: "Bookshelves", selected: "", isAdded: false },
    { name: "Trash can", selected: "", isAdded: false },
    { name: "Mirrors", selected: "", isAdded: false },
    { name: "Shoe rack", selected: "", isAdded: false },
    { name: "Plants", selected: "", isAdded: false },
    { name: "Doormat", selected: "", isAdded: false }
  ]);
  
  const [gadgetsItems, setGadgetsItems] = useState([
    { name: "Shoehorn", selected: "", isAdded: false },
    { name: "Key storage", selected: "", isAdded: false },
    { name: "Bicycle pump", selected: "", isAdded: false }
  ]);
  

      const addRow = (setItems) => {
        setItems(prevItems => [
          ...prevItems,
          { name: "", selected: "", isAdded: true },  // Mark as manually added
          { name: "", selected: "", isAdded: true },
          { name: "", selected: "", isAdded: true }
        ]);
      };
    
      // Function to handle removing the last three items (a row)
      const removeRow = (items, setItems) => {
        // Reverse to find the last added items more easily
        const reversedItems = items.slice().reverse();
        let removedCount = 0;
      
        const remainingItems = reversedItems.filter(item => {
          if (removedCount >= 3) {
            return true; // Keep the item if we've already removed 3 items
          }
          if (item.isAdded) {
            removedCount++; // Increment the removed count
            return false; // Remove this item
          }
          return true; // Keep the item if it wasn't added by the user
        });
      
        setItems(remainingItems.reverse()); // Reverse again to restore original order
      };
      
      
    
      // Helper function to render the entire table for a category
      // Adjusted renderTable function to include the remove button
      const renderTable = (items, setItems, category) => (
        <div style={{ marginBottom: '50px' }}>
          <h2>{category}</h2>
          <table>
            <tbody>
              {items.map((item, index) => (
                (index % 3 === 0) && // Start a new row for every three items
                <tr key={index}>
                  {[items[index], items[index + 1], items[index + 2]].map((it, idx) => it && (
                    <React.Fragment key={idx}>
                      <td>
                        <input
                          type="text"
                          value={it?.name || ''}
                          onChange={(e) => {
                            const updatedItems = [...items];
                            if (updatedItems[index + idx]) {
                              updatedItems[index + idx].name = e.target.value;
                              setItems(updatedItems);
                            }
                          }}
                        />
                      </td>
                      <td>
                        <select
                          value={it?.selected || ''}
                          onChange={(e) => {
                            const updatedItems = [...items];
                            if (updatedItems[index + idx]) {
                              updatedItems[index + idx].selected = e.target.value;
                              setItems(updatedItems);
                            }
                          }}
                        >
                          <option value=""></option>
                          <option value="no">❌</option>
                          <option value="yes">✅</option>
                        </select>
                      </td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
              {/* Last row for Add/Remove buttons */}
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  <button className='hover:underline' onClick={() => addRow(setItems)}>Add Row</button>
                  <span> / </span>
                  <button className='hover:underline' onClick={() => removeRow(items, setItems)}>Remove Row</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );

    
  return (
    <div className='text-lg mt-12 ml-[100px] mr-[120px]'>
      <p className='mb-5'>Below is a complete checklist of all the things you will need when you move out. Simply check off the items you have to keep track. If you are missing something personal, just add it to the list!</p>
      <div>
      {renderTable(bedroomItems, setBedroomItems, 'Bedroom')}
      {renderTable(workspaceItems, setWorkspaceItems,'Workspace')}
      {renderTable(kitchenItems, setKitchenItems, 'Kitchen')}
      {renderTable(bathroomItems, setBathroomItems, 'Bathroom')}
      {renderTable(sportItems, setSportItems, 'Sport')}
      {renderTable(groceryItems, setGroceryItems, 'Grocery')}
      {renderTable(housefurnitureItems, setHouseFurnitureItems,'House furniture')}
      {renderTable(gadgetsItems, setGadgetsItems,'Gadgets')}
    </div>
    </div>
  )
}

export default Moving_Out
