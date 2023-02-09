import { gsap } from 'gsap';

export const appear = function (target) {
  gsap.fromTo(
    target,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 },
  );
};
export const disAppear = function (target) {
  gsap.fromTo(
    target,
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.6 },
  );
};
