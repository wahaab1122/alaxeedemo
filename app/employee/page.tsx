"use client";

import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@heroui/react";
import { ImageIcon, MusicIcon, VideoIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function EmployeePage() {
  const router = useRouter();
  const pathname = usePathname();

  // 🔹 Determine selected tab based on current path
  const [selectedTab, setSelectedTab] = useState("invoice");

  useEffect(() => {
    if (pathname.includes("invoice")) setSelectedTab("invoice");
    else if (pathname.includes("sales")) setSelectedTab("sales");
    else if (pathname.includes("customers")) setSelectedTab("customers");
  }, [pathname]);

  // 🔹 Define all tabs dynamically with corresponding routes
  const tabItems = [
    { key: "invoice", label: "Invoice", icon: <ImageIcon size={20} />, route: "/employee/invoice" },
    { key: "sales", label: "Sales Order", icon: <MusicIcon size={20} />, route: "/employee/sales" },
    { key: "customers", label: "Customers", icon: <VideoIcon size={20} />, route: "/employee/customers" },
  ];

  // 🔹 Handle tab click
  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    const tab = tabItems.find((t) => t.key === key);
    if (tab) router.push(tab.route);
  };

  return (
    <div className="flex w-full flex-col min-h-screen pb-24">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-2">Employee Page</h1>
        <p className="text-gray-500 mb-6">Navigate between pages using tabs</p>
      </div>

      {/* 🔹 Fixed Bottom Tabs */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="bordered"
          selectedKey={selectedTab}
          onSelectionChange={(key) => handleTabChange(key as string)}
          className="px-2 py-1"
        >
          {tabItems.map((tab) => (
            <Tab
              key={tab.key}
              title={
                <div className="flex items-center space-x-2">
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
              }
            />
          ))}
        </Tabs>
      </div>
    </div>
  );
}
