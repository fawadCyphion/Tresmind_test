import * as React from 'react';
import { Box, TableContainer, Table, TableBody, TableCell, TableRow, Paper } from '@mui/material';

function CustomTable({ rows }) {
    const getRowStyle = (index) => {
        if (index % 2 === 0) return { backgroundColor: '#555c57', borderBottom: '0' };
        return { backgroundColor: 'transparent', borderBottom: '0' };
    };

    const getCellStyle = (index, length) => {
        if (index === 0) return { borderBottom: '0', color: 'white', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 };
        else if (index === length - 1) return { borderBottom: '0', color: 'white', borderTopRightRadius: 20, borderBottomRightRadius: 20 };
        else return { borderBottom: '0', color: 'white' };
    };

    return (
        <Box sx={{ flexGrow: 1 }} bgcolor={"#1F1C1C"} padding={6} borderRadius={15}>
         
            <TableContainer component={Paper} sx={{ backgroundColor: "#1F1C1C", boxShadow: "none" }}>
                <Table aria-label="customized table" sx={{ backgroundColor: "#1F1C1C" }}>
                    <TableBody sx={{ backgroundColor: "#1F1C1C" }}>
                        {rows.map((row, rowIndex) => (
                            <TableRow key={row.name} sx={getRowStyle(rowIndex)}>
                                {Object.values(row).map((cell, cellIndex, cellArray) => (
                                    <TableCell
                                        key={cellIndex}
                                        align="left"
                                        sx={getCellStyle(cellIndex, cellArray.length)}
                                    >
                                        {cell}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default CustomTable;
