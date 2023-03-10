import React from "react";

import { signatures } from "../../data/signatures";
import {DataTable, Layout} from "../../components";

import useTitle from "../../utils/useTitle";

const Signatures = () => {
  useTitle("Signatures");
  return (
    <Layout>
      <div className="container bg-white py-10 px-8 rounded">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="uppercase text-xl opacity-90 mb-2">Signatures</h4>
            <h5 className="opacity-70 text-sm">All collected signatures</h5>
          </div>
        </div>
        <div className="container mt-3 overflow-x-auto">
          <DataTable data={signatures} />
        </div>
      </div>
    </Layout>
  );
};

export default Signatures;
