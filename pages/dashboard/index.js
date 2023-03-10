import React from "react";
import Link from "next/link";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import { stats } from "../../data/stats";
import { signatures } from "../../data/signatures";

import useTitle from "../../utils/useTitle";
import {DataTable, Layout, Stat} from "../../components";

const Dashboard = () => {
  useTitle("Dashboard");
  
  return (
    <Layout>
      <div className="container flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {stats.map((stat) => (
          <Stat
            key={stat.url}
            title={stat.title}
            icon={<stat.icon />}
            total={stat.total}
            url={stat.url}
            description={stat.description}
            color={stat.color}
          />
        ))}
      </div>
      <div className="container bg-white py-10 px-8 mt-12 rounded">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="uppercase text-xl opacity-90 mb-2">Signatures</h4>
            <h5 className="opacity-70 text-sm">
              Recently collected signatures
            </h5>
          </div>
          <Link
            href="/dashboard/signatures"
            className="flex items-center gap-1 text-sm bg-[#3b76ef] text-white py-2 px-3 rounded hover:opacity-90"
          >
            All signatures
            <ArrowRightAltOutlinedIcon className="opacity-70 text-md" />
          </Link>
        </div>
        <div className="container mt-3 overflow-x-auto">
          <DataTable data={signatures} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
