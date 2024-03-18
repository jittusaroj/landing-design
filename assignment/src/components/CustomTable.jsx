import * as React from 'react';
import { DataGrid ,GridToolbarExport,GridToolbarContainer} from '@mui/x-data-grid';

const columns = [
  { field: 'month', headerName: 'MONTH', sortable: true, filter:false, width:200 },
  { field: 'avgPF', headerName: 'AVG POWER FACTOR (%)',sortable:false,width:210},
  { field: 'pfIP', headerName: 'PF INCENTIVE/ PF PENALTY',sortable:false,width:300 }
];

const rows = [
    { id: 1, month: 'Aug 2019', avgPF: '164', pfIP: 'Incentive' },
    { id: 2, month: 'Dec 2018', avgPF: '175', pfIP: 'Incentive' },
    { id: 3, month: 'Dec 2019', avgPF: '183', pfIP: 'Incentive' },
    { id: 4, month: 'Feb 2019', avgPF: '177', pfIP: 'Incentive' },
    { id: 5, month: 'Jan 2019', avgPF: '172', pfIP: 'Incentive' },
    { id: 6, month: 'Jul 2019', avgPF: '194', pfIP: 'Penalty' },
    { id: 7, month: 'Jun 2019', avgPF: '180', pfIP: 'Incentive' },
    { id: 8, month: 'Mar 2019', avgPF: '190', pfIP: 'Incentive' },
    { id: 9, month: 'May 2019', avgPF: '186', pfIP: 'Incentive' },
    { id: 7, month: 'Jun 2019', avgPF: '180', pfIP: 'Incentive' },
    { id: 3, month: 'Dec 2019', avgPF: '183', pfIP: 'Incentive' },
    { id: 4, month: 'Feb 2019', avgPF: '177', pfIP: 'Incentive' },
  ]

export default function DataTable() {
    function CustomToolbar() {
        return (
          <GridToolbarContainer>
            <GridToolbarExport />
          </GridToolbarContainer>
        );
      }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      className='customise-table'
      classes={"customise-table"}
              headerClassName="custom-header"
      disableColumnFilter={false}
      disableColumnMenu={false}
      disableColumnSelector={false}
      disableMultipleColumnsFiltering={false}
      rowSelection={false}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        slots={{
            toolbar: CustomToolbar,
          }}
        
      />
    </div>
  );
}