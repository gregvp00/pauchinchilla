import React from "react";
import { Slot, SlotProps } from "@radix-ui/react-slot";
import { motion, MotionProps } from "framer-motion";

type MotionSlotProps = MotionProps & SlotProps;

const MotionSlotComponent = React.forwardRef<HTMLElement, MotionSlotProps>(
  (props, ref) => <Slot {...props} ref={ref} />
);

MotionSlotComponent.displayName = "MotionSlot";

export const MotionSlot = motion.create(MotionSlotComponent);
