import brush from "./brush" ;

// create the model for the E-R diagram
const model = {
  nodeDataArray: [
    {
      key: "Products",
      items: [
        {
          name: "ProductID",
          iskey: true,
          figure: "Decision",
          color: brush.yellowgrad
        },
        { name: "ProductName", iskey: false, figure: "Cube1", color: brush.bluegrad },
        {
          name: "SupplierID",
          iskey: false,
          figure: "Decision",
          color: "purple"
        },
        {
          name: "CategoryID",
          iskey: false,
          figure: "Decision",
          color: "purple"
        }
      ]
    },
    {
      key: "Suppliers",
      items: [
        {
          name: "SupplierID",
          iskey: true,
          figure: "Decision",
          color: brush.yellowgrad
        },
        { name: "CompanyName", iskey: false, figure: "Cube1", color: brush.bluegrad },
        { name: "ContactName", iskey: false, figure: "Cube1", color: brush.bluegrad },
        { name: "Address", iskey: false, figure: "Cube1", color: brush.bluegrad }
      ]
    },
    {
      key: "Categories",
      items: [
        {
          name: "CategoryID",
          iskey: true,
          figure: "Decision",
          color: brush.yellowgrad
        },
        {
          name: "CategoryName",
          iskey: false,
          figure: "Cube1",
          color: brush.bluegrad
        },
        { name: "Description", iskey: false, figure: "Cube1", color: brush.bluegrad },
        { name: "Picture", iskey: false, figure: "TriangleUp", color: brush.redgrad }
      ]
    },
    {
      key: "Order Details",
      items: [
        { name: "OrderID", iskey: true, figure: "Decision", color: brush.yellowgrad },
        {
          name: "ProductID",
          iskey: true,
          figure: "Decision",
          color: brush.yellowgrad
        },
        {
          name: "UnitPrice",
          iskey: false,
          figure: "MagneticData",
          color: brush.greengrad
        },
        {
          name: "Quantity",
          iskey: false,
          figure: "MagneticData",
          color: brush.greengrad
        },
        {
          name: "Discount",
          iskey: false,
          figure: "MagneticData",
          color: brush.greengrad
        }
      ]
    }
  ],
  linkDataArray: [
    { from: "Products", to: "Suppliers", text: "0..N", toText: "1" },
    { from: "Products", to: "Categories", text: "0..N", toText: "1" },
    { from: "Order Details", to: "Products", text: "0..N", toText: "1" }
  ]
};
export default model ;