// src/dayjsConfig.js
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";

// Extend plugins
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

// Set locale and timezone
dayjs.locale("id");
dayjs.tz.setDefault("Asia/Jakarta");

export default dayjs;
