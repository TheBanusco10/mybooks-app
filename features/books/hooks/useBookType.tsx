import { Type } from "@/features/shared/types/books";
import { BookOpen, Tablet } from "@tamagui/lucide-icons";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

  const types = useMemo(
    () => [
      { value: "paper", label: t("books.types.paper") },
      { value: "kindle", label: t("books.types.kindle") },
    ],
    [t]
  );

  const DEFAULT_BOOK_TYPE = useMemo(() => types.at(0)!, [types]);

  const getBookType = (typeValue: string): Type => {
    return types.find((type) => type.value === typeValue) || types.at(0)!;
  };

  const isPaper = (typeValue: string): boolean => {
    return typeValue === "paper";
  };

  const getTypeIcon = ({
    typeValue,
    color,
    size,
  }: {
    typeValue: string;
    color?: string;
    size?: number | string;
  }) => {
    return isPaper(typeValue) ? (
      <BookOpen color={color as any} size={size as any} />
    ) : (
      <Tablet color={color as any} size={size as any} />
    );
  };

  return {
    types,
    getBookType,
    isPaper,
    getTypeIcon,
    DEFAULT_BOOK_TYPE,
  };
};
