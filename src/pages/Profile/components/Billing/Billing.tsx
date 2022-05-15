import styles from "./Billing.module.scss";
import { ReactComponent as SortIcon } from "../../../../assets/icons/sort.svg";
import pdfIcon from "../../../../assets/icons/pdf.png";

export const Billing = () => {
  return (
    <div className={styles.billing}>
      <table>
        <thead>
          <tr>
            <th>REFERENCE ID</th>
            <th>DATE <SortIcon /></th>
            <th>AMOUNT</th>
            <th>INVOICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4571222f6rthswfg9981fr55</td>
            <td>7/12/2020</td>
            <td>$28</td>
            <td><img src={pdfIcon} alt="invoice" /></td>
          </tr>
          <tr>
            <td>4571222f6rthswfg9981fr55</td>
            <td>7/12/2020</td>
            <td>$28</td>
            <td><img src={pdfIcon} alt="invoice" /></td>
          </tr>
          <tr>
            <td>4571222f6rthswfg9981fr55</td>
            <td>7/12/2020</td>
            <td>$28</td>
            <td><img src={pdfIcon} alt="invoice" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
