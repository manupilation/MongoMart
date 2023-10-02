import ErrorHandler from "../ErrorHandler";
import HttpStatus from "../../enum/HTTPStatus";

export default function groupToNotBeUndefined(group: any[]) {
  group.forEach((item) => {
    if (item === undefined)
      throw new ErrorHandler("It's necessary all infos", HttpStatus.BadRequest);
  });
}