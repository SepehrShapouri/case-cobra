"use client";
import React from "react";
interface DesignConfiguratorProps {
  configId: string;
  imgUrl: string;
  imageDimensions: { width: number; height: number };
}
function DesignConfigurator({
  configId,
  imgUrl,
  imageDimensions,
}: DesignConfiguratorProps) {
  return <div>DesignConfigurator</div>;
}

export default DesignConfigurator;
