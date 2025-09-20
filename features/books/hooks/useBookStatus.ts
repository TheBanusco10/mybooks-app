import { Status, TypeSingle } from "@/features/shared/types/books";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();
  const STATUS_READING: TypeSingle = "reading";
  const STATUS_FINISHED: TypeSingle = "finished";
  const STATUS_PAUSED: TypeSingle = "paused";

  const DEFAULT_STATUS: TypeSingle = STATUS_READING;

  const statuses = useMemo<Status[]>(
    () => [
      { value: STATUS_READING, label: t("books.statuses.reading") },
      { value: STATUS_FINISHED, label: t("books.statuses.finished") },
      { value: STATUS_PAUSED, label: t("books.statuses.paused") },
    ],
    [t]
  );

  const getBookStatus = (statusValue: string): Status => {
    return (
      statuses.find((status) => status.value === statusValue) || statuses.at(0)!
    );
  };

  const getStatusBackgroundColor = (statusValue: string) => {
    switch (statusValue) {
      case STATUS_READING:
        return "$info";
      case STATUS_FINISHED:
        return "$success";
      case STATUS_PAUSED:
        return "$warning";
      default:
        return "$info";
    }
  };

  return {
    statuses,
    getBookStatus,
    getStatusBackgroundColor,
    DEFAULT_STATUS,
  };
};
