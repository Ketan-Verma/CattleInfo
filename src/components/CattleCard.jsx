import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function TableComponent({ Sno, DOB, DOC, Parity, Sex }) {
  return (
    <TableContainer
      style={{ maxWidth: 500, margin: "1em auto" }}
      component={Paper}
    >
      <Table sx={{ p: 2 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <Typography variant="subtitle1">Serial Number</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="body1">{Sno}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">
              <Typography variant="subtitle1">Date Of Birth</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="body1">{DOB ? DOB : " "}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">
              <Typography variant="subtitle1">Date Of Calving</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="body1">{DOC ? DOC : " "}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">
              <Typography variant="subtitle1">Parity</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="body1">{Parity ? Parity : " "}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">
              <Typography variant="subtitle1">Calf Sex</Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="body1">{Sex ? Sex : " "}</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const CattleCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <TableComponent
        Sno={data.Sno}
        DOB={data.DOB}
        DOC={data.DOC}
        Parity={data.Parity}
        Sex={data.Sex}
      />
    </div>
  );
};

export default CattleCard;
