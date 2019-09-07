export const ByMarketCap = {
  template: `
  
    <table>
      <th>
        <td>
          Stock Name
        </td>
        <td>
          Market Capitalization
        </td>
      </th>
      <tr v-for = "a in stocks">
        <td  >
          {{a.name}}
        </td>
        <td>
          {{a.mCap}}
        </td>
      </tr>
    </table>
  ` ,
  data: function () {
    return {
      stocks: [
        { "name": "HDFC", "mCap": "1000Cr" },
        { "name": "ICICI", "mCap": "100Cr" }
      ]
    }
  }


}