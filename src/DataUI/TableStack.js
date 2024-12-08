import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function TableStack({data}) {
  return (
    <div>
        <Paper elevation={12} style={{width:"450px", padding:"35px"}}>
        <TableContainer>
            <TableHead>
                <TableRow>
                    <TableCell>Regno</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Sem</TableCell>
                    <TableCell>Results</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item,index)=>{

                       return(
                        <TableRow key={index}>
                        <TableCell>{item.regno}</TableCell>
                        <TableCell>{item.year}</TableCell>
                        <TableCell>{item.sem}</TableCell>
                        <TableCell>{item.result}</TableCell>

                    </TableRow>
                       )
                    })

                }
            </TableBody>
        </TableContainer>
        </Paper>


    </div>
  )
}

export default TableStack