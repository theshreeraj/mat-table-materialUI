import Check from "@material-ui/icons/Check";
import MaterialTable from "material-table";
import tableIcons from "./MaterialTableIcons";

const data = [
    { name: "Raj", surname: "Goyal", birthYear: 1995 },
    { name: "Pradeep", surname: "Sharma", birthYear: 1994 },
    { name: "Sudeep", surname: "Kumar", birthYear: 1994 },
];

const columns = [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
];

export const ActionTable = () => {
    return (
        <MaterialTable
            title="Table with actions"
            actions={[
                {
                    icon: tableIcons.CheckBoxOutlineBlankIcon,
                    tooltip: "Row Checked",
                    onClick: (event, rowData) => alert("Do you want to check mark the row"),
                },
            ]}
            icons={tableIcons}
            columns={columns}
            data={data}
            options={{ sorting: true }}


        />
    );
};
