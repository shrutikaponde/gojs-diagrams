import brush from "./brush" ;
import node from "./node.json"
import link from "./link.json"


const model = {
  nodeDataArray:[
  {
    key: 'current_dept_emp',
    items: [
      {
        name: 'emp_no',
        type: [
          'null',
          'integer'
        ],
        isKey: false,
        keyType: '',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'dept_no',
        type: [
          'null',
          'string'
        ],
        isKey: false,
        keyType: '',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'from_date',
        type: [
          'null',
          'string'
        ],
        isKey: false,
        keyType: '',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'to_date',
        type: [
          'null',
          'string'
        ],
        isKey: false,
        keyType: '',
        figure: 'Decision',
        color: ''
      }
    ]
  },
  {
    key: 'departments',
    items: [
      {
        name: 'dept_no',
        type: [
          'null',
          'string'
        ],
        isKey: true,
        keyType: 'PK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'dept_name',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      }
    ]
  },
  {
    key: 'dept_emp',
    items: [
      {
        name: 'emp_no',
        type: [
          'null',
          'integer'
        ],
        isKey: true,
        keyType: 'FK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'dept_no',
        type: [
          'null',
          'string'
        ],
        isKey: true,
        keyType: 'FK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'from_date',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      },
      {
        name: 'to_date',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      }
    ]
  },
  {
    key: 'dept_emp_latest_date',
    items: [
      {
        name: 'emp_no',
        type: [
          'null',
          'integer'
        ],
        isKey: false,
        keyType: '',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'from_date',
        type: [
          'null',
          'string'
        ],
        isKey: false,
        keyType: '',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'to_date',
        type: [
          'null',
          'string'
        ],
        isKey: false,
        keyType: '',
        figure: 'Decision',
        color: ''
      }
    ]
  },
  {
    key: 'dept_manager',
    items: [
      {
        name: 'emp_no',
        type: [
          'null',
          'integer'
        ],
        isKey: true,
        keyType: 'FK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'dept_no',
        type: [
          'null',
          'string'
        ],
        isKey: true,
        keyType: 'FK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'from_date',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      },
      {
        name: 'to_date',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      }
    ]
  },
  {
    key: 'employees',
    items: [
      {
        name: 'emp_no',
        type: [
          'null',
          'integer'
        ],
        isKey: true,
        keyType: 'PK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'birth_date',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      },
      {
        name: 'first_name',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      },
      {
        name: 'last_name',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      },
      {
        name: 'gender',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      },
      {
        name: 'hire_date',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      }
    ]
  },
  {
    key: 'salaries',
    items: [
      {
        name: 'emp_no',
        type: [
          'null',
          'integer'
        ],
        isKey: true,
        keyType: 'PK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'salary',
        type: [
          'null',
          'integer'
        ],
        figure: 'Decision',
        color: ''
      },
      {
        name: 'from_date',
        type: [
          'null',
          'string'
        ],
        isKey: true,
        keyType: 'PK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'to_date',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      }
    ]
  },
  {
    key: 'titles',
    items: [
      {
        name: 'emp_no',
        type: [
          'null',
          'integer'
        ],
        isKey: true,
        keyType: 'PK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'title',
        type: [
          'null',
          'string'
        ],
        isKey: true,
        keyType: 'PK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'from_date',
        type: [
          'null',
          'string'
        ],
        isKey: true,
        keyType: 'PK',
        figure: 'Decision',
        color: ''
      },
      {
        name: 'to_date',
        type: [
          'null',
          'string'
        ],
        figure: 'Decision',
        color: ''
      }
    ]
  }
],
linkDataArray: 
[
  {
    from: 'dept_emp',
    to: 'employees'
  },
  {
    from: 'dept_emp',
    to: 'departments'
  },
  {
    from: 'dept_manager',
    to: 'employees'
  },
  {
    from: 'dept_manager',
    to: 'departments'
  }
]}
// create the model for the E-R diagram
const model1 = {
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