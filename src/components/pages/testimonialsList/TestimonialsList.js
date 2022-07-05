import React, {useState}from 'react'
import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from '@material-ui/icons';
import {testimonialsRows} from '../../dummyData/DummyData';
import { Link } from 'react-router-dom';
import './TestimonialsList.css';
const TestimonialsList = () => {
  const [data,setData] = useState(testimonialsRows);
    const handleDelete = (id) => {
        setData(data.filter(item=> item.id!==id));
    }

    const columns = [
        
 { field: 'id', headerName: 'ID', width: 100 },
 { field: 'username', headerName: 'User Name', width: 150 },
  { field: 'testimonial', headerName: 'Testimonial', width: 150, renderCell:(params)=> {
    return(
        <div className='testimonialListUser'>
            <img className='testimonialListImg' src={params.row.img} alt =""/>
            {params.row.name}
        </div>
    );
  },
},

  {
    field: "action",
    headerName:"Action",
    width:150,
    renderCell : (params) => {
        return(
            <>
            <Link to={"/testimonial/"+params.row.id}>
            <button className='testimonialListEdit'>Edit Testimonial</button>
            </Link>
            <DeleteOutline className='testimonialListDelete' onClick = {() => handleDelete(params.row.id)}/>
            </>
        )
    }

  }
 
];


  return (
    <div className='testimonialList'>
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default TestimonialsList;