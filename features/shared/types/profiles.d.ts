import type { Row } from "~/interfaces/database";

type ImageUrl = Row<"profiles">["image_url"];

interface SearchProfileInformation {
  username: string;
}

interface SearchProfileResult {
  username: string;
  image_url: ImageUrl;
}

type SearchProfilesResults = SearchProfileResult[];

type Profile = Row<"profiles">;

export type { SearchProfileInformation, SearchProfilesResults, SearchProfileResult, Profile };
