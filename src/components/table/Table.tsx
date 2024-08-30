import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Scrollbar from "src/components/scrollbar";
import { TableHeadCustom, TableNoData, TableProps } from "src/components/table";

import { Box, Pagination } from "@mui/material";
import UserTableFiltersResult from "../../components/table/TableFiltersResult";

// ----------------------------------------------------------------------

type Props = {
  table: TableProps;
  totalElements: number;
  list?: any[];
  columns: any;
  onSelectRow?: (e: any) => void;
};

export default function TableEmptyRows({
  table,
  // emptyRows,
  totalElements,
  list,
  columns,
  onSelectRow,
}: Props) {
  const getRowNumber = (idx) => {
    const no = totalElements - idx;
    return no - table.page * table.rowsPerPage;
  };

  return (
    <>
      <UserTableFiltersResult
        results={totalElements}
        sx={{ p: 2.5, pt: 0, display: "flex", alignItems: "flex-end" }}
      />

      <TableContainer sx={{ position: "relative", overflow: "unset" }}>
        <Scrollbar>
          <Table size={table.dense ? "small" : "medium"} sx={{}}>
            <TableHeadCustom
              headLabel={columns}
              rowCount={totalElements}
              numSelected={table.selected.length}
            />

            <TableBody>
              {list &&
                list.map((row, idx) => (
                  <TableRow
                    hover
                    selected={table.selected.includes(String(row.id))}
                    onClick={() => (onSelectRow ? onSelectRow(row) : {})}
                    style={{ cursor: "pointer" }}
                    key={`row_${getRowNumber(idx)}`}
                  >
                    {columns
                      .filter((column) => {
                        if (column.id === "") {
                          if (!column.Cell) return false;
                        }
                        return true;
                      })
                      .map((column, colIdx) => {
                        // if (!column?.id) return;

                        let text = row[column.id] ? row[column.id] : "";
                        if (column?.Cell) text = column?.Cell(row);

                        let align:
                          | "center"
                          | "left"
                          | "right"
                          | "inherit"
                          | "justify"
                          | undefined = "center";
                        if (!column.align) align = "center";
                        else if (column.align === "left") align = "left";
                        else if (column.align === "right") align = "right";

                        return (
                          <TableCell
                            align={align}
                            key={`col_${getRowNumber(idx)}_${colIdx}`}
                          >
                            {text}
                          </TableCell>
                        );
                      })}
                  </TableRow>
                ))}
              {list !== undefined && (
                <TableNoData notFound={list.length === 0} />
              )}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      {/* <TablePaginationCustom
        count={totalElements}
        page={table.page}
        rowsPerPage={table.rowsPerPage}
        onPageChange={table.onChangePage}
        onRowsPerPageChange={table.onChangeRowsPerPage}
        dense={table.dense}
        onChangeDense={table.onChangeDense}
      /> */}

      {totalElements > table?.rowsPerPage && (
        <Box
          sx={{
            paddingTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            page={table.page + 1}
            // count={3}
            count={Math.round(totalElements / table?.rowsPerPage)}
            onChange={(e, page: number) => {
              table.onChangePage(e, page - 1);
            }}
            shape="rounded"
          />
        </Box>
      )}
    </>
  );
}
