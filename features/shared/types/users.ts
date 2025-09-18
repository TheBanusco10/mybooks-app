import type { Row } from "~/interfaces/database";

// Values need to be declared as possible undefined "?" too because we're reusing the update function to remove the user's image and we cannot pass other information
interface UserInformation {
  image_url?: string;
  username?: string;
  is_private?: boolean;
}

type PublicUserInformation = Row<"profiles">;

export type { UserInformation, PublicUserInformation };
