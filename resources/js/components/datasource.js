// Trong file datasource.js
export function generateResourceData(startIndex, endIndex, resourceName) {
    let data = [];
    for (let i = startIndex; i <= endIndex; i++) {
        data.push({ Id: i, Text: `${resourceName} ${i}`, Color: 'blue', DepartmentId: i ,DepartmentName:`DepartmentName ${i}`}); // Thêm DepartmentId vào dữ liệu
    }
    return data;
}


