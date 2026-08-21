"use client";

import React from "react";
import { motion } from "framer-motion";

export const DraggableCardContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={`relative ${className ?? ""}`}>{children}</div>;
};

export const DraggableCardBody = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      drag
      dragElastic={0.6}
      dragMomentum
      whileTap={{ scale: 1.05 }}
      className={`cursor-grab active:cursor-grabbing select-none touch-none ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
};