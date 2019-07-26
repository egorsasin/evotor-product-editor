import {
  animate,
  query,
  style,
  transition,
  trigger
} from "@angular/animations";

export const sidebarAnimation = trigger("sidebarAnimation", [
  transition("void => *", [
    query(
      ".sidebar",
      [
        style({ opacity: 0, transform: "translateX(100%)" }),
        animate("0.2s ease-in")
      ],
      {
        optional: true
      }
    )
  ]),
  transition("* => void", [
    query(
      ".sidebar",
      [
        style({ opacity: 1, transform: "translateX(0)" }),
        animate(
          "0.2s ease-out",
          style({ opacity: 0, transform: "translateX(100%)" })
        )
      ],
      { optional: true }
    )
  ])
]);
