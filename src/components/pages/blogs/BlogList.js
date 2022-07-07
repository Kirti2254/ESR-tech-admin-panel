import React, {useState} from 'react'
import './BlogList.css'
import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from '@material-ui/icons';
import {blogRows} from '../../dummyData/DummyData';
import { Link } from 'react-router-dom';
const BlogList = () => {
    const [data,setData] = useState(blogRows);
    const handleDelete = (id) => {
        setData(data.filter(item=> item.id!==id));
    }

    const columns = [
        
 { field: 'id', headerName: 'ID', width: 100 },
  { field: 'blogtitle', headerName: 'BlogTitle', width: 300, renderCell:(params)=> {
    return(
        <div className='blogListUser'>
            <img className='blogListImg' src={params.row.img} alt =""/>
            {params.row.name}
        </div>
    );
  },
},

{field : 'comment', headerName:'Comment', width: 500},
{field : 'reply', headerName:'Reply', width: 500},
  {
    field: "action",
    headerName:"Action",
    width:150,
    renderCell : (params) => {
        return(
            <>
            <Link to={"/blog/"+params.row.id}>
            <button className='blogListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='blogListDelete' onClick = {() => handleDelete(params.row.id)}/>
            </>
        )
    }

  }
 
];
  return (
    <div className='blogList'>
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

export default BlogList;