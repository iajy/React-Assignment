import React from 'react'

const TableDetails=()=> {
  return (
    <div>
        <div>
          <table border={1} width={1500} align="center" cellSpacing={20} cellPadding={20}>
            <tr className="p-10 m-10">
              <td>Month</td>
              <td>Principal</td>
              <td>Intrest</td>
              <td>Remaining Balance </td>
            </tr>
            <tbody>
                <tr className='py-20'>
                    <td className='py-5 px-5'>1</td>
                    <td className='px-5'>111</td>
                    <td className='px-5'>222</td>
                    <td className='px-5'>222</td>
                </tr>

            </tbody>
            <tfoot></tfoot>
            
          </table>
        </div>
    </div>
  )
}

export default TableDetails