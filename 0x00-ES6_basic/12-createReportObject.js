export default function createReportObject(employeesList) {
  return { allEmployees: { ...employeesList } };
}
