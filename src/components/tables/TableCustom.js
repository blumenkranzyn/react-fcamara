import React from "react";
import MaterialTable from "material-table";
import { Grid, withStyles } from "@material-ui/core"
import { MTableToolbar } from "material-table";

const styles = () => ({
  root: {
    padding: 0,
  }
})

const TableCustom = ({ config, data, style, actions, classes, forwardedRef}) => {

  let options = {
    ...config.options,
    sorting: false,
    debounceInterval: 1000,
    loadingType: 'linear',
    paginationType: 'normal',
    draggable: true,
    searchFieldAlignment: "left"
  };


  return (
    <>
      <MaterialTable
        columns={config.columns}
        tableRef={forwardedRef}
        data={data}
        style={style}
        title={""}
        options={options}
        searchFieldStyle={config.searchFieldStyle}
        actions={actions}
        components={{
          Toolbar: props => (
            <Grid container justify={"space-between"} alignItems={"center"}>
              <Grid item xs={12}>
                <div className="flex flex-row items-center">
                  <MTableToolbar {...props} searchFieldStyle={{ minWidth: 200 }} classes={{ root: classes.root }} />
                </div>
              </Grid>
            </Grid>
          )
        }}
      />
     </>
  )
}

export default withStyles(styles)(TableCustom)