import { Tree, TreeNode } from "react-organizational-chart";

import "./Organogram.css"

const Organogram = () => (
  <section className="organogram">
    <p>
      Meantime Management Organisation Structure
    </p>
    <div className="scroll-wrapper">
      <Tree
       lineColor={'var(--bg-color)'}
        label={
          <div className="tree">
            <p>
              Meantime Management Co-directorship
            </p>
          </div>
        }
      >
        <TreeNode label={<div className="tree-node">Board of natural and non-natural trustees</div>}>
          
          <TreeNode label={<div className="tree-node">The Meantimes</div>}>
            <TreeNode label={<div className="tree-node">The Meantimes Newsletter</div>}>
              <TreeNode label={<div className="tree-node">Operational</div>} />
              <TreeNode label={<div className="tree-node">Editorial</div>} />
            </TreeNode>

            <TreeNode label={<div className="tree-node">The Meantimes Newspaper</div>}>
              <TreeNode label={<div className="tree-node">Printers</div>} />
              <TreeNode label={<div className="tree-node">Runners</div>} />
            </TreeNode> 
          </TreeNode>
          
          <TreeNode label={<div className="tree-node">Office of Para-Temporal Mapping</div>}>
            <TreeNode label={<div className="tree-node">Timeline 0.1</div>} />
          </TreeNode>

        </TreeNode>

        <TreeNode label={<div className="tree-node">Union of temporal workers</div>}>
          
          <TreeNode label={<div className="tree-node">Research Group</div>}>
            {/* <TreeNode label={<div className="tree-node">Weekly Group Walk</div>} />
            <TreeNode label={<div className="tree-node">Proposals</div>} /> */}
          </TreeNode>

          <TreeNode label={<div className="tree-node">Community Management</div>}>
            <TreeNode label={<div className="tree-node">Canary Wharf Garden Walk</div>}>
              <TreeNode label={<div className="tree-node">Walking Panel</div>} />
            </TreeNode>
            <TreeNode label={<div className="tree-node">Running Group 'Space Annihilators'</div>} />
          </TreeNode>

        </TreeNode>

      </Tree>
    </div>
  </section>
);

export default Organogram;
