import React from 'react'
import DashboardSidebar from './DashboardSidebar'

function DashboardLayout() {
  return (
    <div>
        <div className="d-flex">
            <div className="col-auto">
                <DashboardSidebar/>
            </div>

        </div>
    </div>
  )
}

export default DashboardLayout