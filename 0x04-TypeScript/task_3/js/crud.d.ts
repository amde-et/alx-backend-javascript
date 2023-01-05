import { RowID, RowElement} from './interface';

declare function insertRow(row: RowElement) : number;
declare function deleteRow(rowId: RowID): undefined;
declare function updateRow(rowId: RowID, row: RowElement): number;
