import { getEmployees, getOrders} from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
                  data-id="${employee.id}"
                  data-type="employee"
                  >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvnt) => {
        const itemClicked = clickEvnt.target

        if (itemClicked.dataset.type === "employee" ) {
            const empId = parseInt(itemClicked.dataset.id)
            
            //Filter orders for the clicked employee
            const employeeOrders = orders.filter(order => order.employeeId === empId)

            //Get the employee's name
            const employee = employees.find(emp => emp.id === empId)

            //Create the message
            const message = `${employee.name} has sold ${employeeOrders.length} product.`

            window.alert(message)

        }
        
    }

)

