// material-ui
import { Theme } from "@mui/material/styles";

// third-party
import { merge } from "lodash";

// project import
// import Accordion from './Accordion';
// import AccordionDetails from './AccordionDetails';
// import AccordionSummary from './AccordionSummary';
// import Alert from './Alert';
// import AlertTitle from './AlertTitle';
// import Autocomplete from './Autocomplete';
// import Badge from './Badge';
import Button from "./Button";
import Radio from "./Radio";
// import ButtonBase from './ButtonBase';
// import ButtonGroup from './ButtonGroup';
// import CardContent from './CardContent';
// import Checkbox from './Checkbox';
// import Chip from './Chip';
// import Dialog from './Dialog';
// import DialogContentText from './DialogContentText';
// import DialogTitle from './DialogTitle';
// import Fab from './Fab';
// import FormHelperText from './FormHelperText';
// import IconButton from './IconButton';
// import InputBase from './InputBase';
// import InputLabel from './InputLabel';
// import LinearProgress from './LinearProgress';
// import Link from './Link';
// import ListItemButton from './ListItemButton';
// import ListItemIcon from './ListItemIcon';
// import LoadingButton from './LoadingButton';
// import OutlinedInput from './OutlinedInput';
// import Pagination from './Pagination';
// import PaginationItem from './PaginationItem';
// import Popover from './Popover';
// import Slider from './Slider';
// import Switch from './Switch';
// import Tab from './Tab';
// import TableBody from './TableBody';
// import TableCell from './TableCell';
// import TableFooter from './TableFooter';
// import TableHead from './TableHead';
// import TablePagination from './TablePagination';
// import TableRow from './TableRow';
// import Tabs from './Tabs';
// import ToggleButton from './ToggleButton';
// import Tooltip from './Tooltip';
// import TreeItem from './TreeItem';
// import Typography from "./typography";
// import SelectInputBase from './Select';
// import DialogAction from './DialogActions';
// import CalendarCard from './CalendarCard';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    // Accordion(theme),
    // AccordionDetails(theme),
    // AccordionSummary(theme),
    // Alert(theme),
    // AlertTitle(),
    // Autocomplete(),
    // Badge(theme),
    Button(theme),
    // ButtonBase(),
    // ButtonGroup(),
    // CardContent(),
    // Checkbox(theme),
    // Chip(theme),
    // Dialog(),
    // DialogContentText(theme),
    // DialogTitle(),
    // DialogAction(theme),
    // Fab(theme),
    // FormHelperText(),
    // IconButton(theme),
    // InputBase(theme),
    // InputLabel(theme),
    // LinearProgress(),
    // Link(),
    // ListItemButton(theme),
    // ListItemIcon(theme),
    // LoadingButton(),
    // OutlinedInput(theme),
    // Pagination(),
    // PaginationItem(theme),
    // Popover(theme),
    Radio(theme)
    // Slider(theme),
    // Switch(theme),
    // Tab(theme),
    // TableBody(theme),
    // TableCell(theme),
    // TableFooter(theme),
    // TableHead(theme),
    // TablePagination(),
    // TableRow(),
    // Tabs(theme),
    // ToggleButton(theme),
    // Tooltip(theme),
    // TreeItem(),
    // Typography()
    // CalendarCard(theme),
    // SelectInputBase(theme)
  );
}
