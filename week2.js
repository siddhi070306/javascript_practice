
document.addEventListener('DOMContentLoaded', function() {
    // Page Navigation
    const introPage = document.getElementById('intro-page');
    const dashboardPage = document.getElementById('dashboard-page');
    const workoutPage = document.getElementById('workout-page');
    const progressPage = document.getElementById('progress-page');
    const penaltyPage = document.getElementById('penalty-page');
    
    // Buttons
    const enterButton = document.getElementById('enter-button');
    const workoutNav = document.getElementById('workout-nav');
    const progressNav = document.getElementById('progress-nav');
    const penaltyNav = document.getElementById('penalty-nav');
    const backToDashboard = document.getElementById('back-to-dashboard');
    const backToDashboardFromProgress = document.getElementById('back-to-dashboard-from-progress');
    const backToDashboardFromPenalty = document.getElementById('back-to-dashboard-from-penalty');
    
    // Enter button click
    enterButton.addEventListener('click', function() {
        introPage.classList.add('hidden-section');
        dashboardPage.classList.remove('hidden-section');
    });
    
    // Workout nav click
    workoutNav.addEventListener('click', function() {
        dashboardPage.classList.add('hidden-section');
        workoutPage.classList.remove('hidden-section');
    });
    
    // Progress nav click
    progressNav.addEventListener('click', function() {
        dashboardPage.classList.add('hidden-section');
        progressPage.classList.remove('hidden-section');
        
        // Initialize charts when progress page is shown
        initProgressCharts();
    });
    
    // Penalty nav click
    penaltyNav.addEventListener('click', function() {
        dashboardPage.classList.add('hidden-section');
        penaltyPage.classList.remove('hidden-section');
    });
    
    // Back to dashboard from workout
    backToDashboard.addEventListener('click', function() {
        workoutPage.classList.add('hidden-section');
        dashboardPage.classList.remove('hidden-section');
    });
    
    // Back to dashboard from progress
    backToDashboardFromProgress.addEventListener('click', function() {
        progressPage.classList.add('hidden-section');
        dashboardPage.classList.remove('hidden-section');
    });
    
    // Back to dashboard from penalty
    backToDashboardFromPenalty.addEventListener('click', function() {
        penaltyPage.classList.add('hidden-section');
        dashboardPage.classList.remove('hidden-section');
    });
    
    // Checkbox functionality
    const checkboxes = document.querySelectorAll('.custom-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskCard = this.closest('.task-card');
            if (this.checked) {
                const statusSpan = taskCard.querySelector('.bg-yellow-900');
                if (statusSpan) {
                    statusSpan.classList.remove('bg-yellow-900', 'text-yellow-400');
                    statusSpan.classList.add('bg-green-900', 'text-green-400');
                    statusSpan.textContent = 'Completed';
                }
            } else {
                const statusSpan = taskCard.querySelector('.bg-green-900');
                if (statusSpan) {
                    statusSpan.classList.remove('bg-green-900', 'text-green-400');
                    statusSpan.classList.add('bg-yellow-900', 'text-yellow-400');
                    statusSpan.textContent = 'Pending';
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts function
    function initProgressCharts() {
        // Progress Chart
        const progressChart = echarts.init(document.getElementById('progress-chart'));
        const progressOption = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                textStyle: {
                    color: '#1f2937'
                }
            },
            grid: {
                top: 10,
                right: 10,
                bottom: 30,
                left: 50
            },
            xAxis: {
                type: 'category',
                data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                axisLine: {
                    lineStyle: {
                        color: '#4b5563'
                    }
                },
                axisLabel: {
                    color: '#9ca3af'
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#4b5563'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#374151'
                    }
                },
                axisLabel: {
                    color: '#9ca3af'
                }
            },
            series: [
                {
                    name: 'Completed Workouts',
                    type: 'line',
                    smooth: true,
                    data: [12, 19, 15, 22],
                    lineStyle: {
                        color: 'rgba(87, 181, 231, 1)'
                    },
                    itemStyle: {
                        color: 'rgba(87, 181, 231, 1)'
                    },
                    showSymbol: false,
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(87, 181, 231, 0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(87, 181, 231, 0.1)'
                                }
                            ]
                        }
                    }
                },
                {
                    name: 'Target Workouts',
                    type: 'line',
                    smooth: true,
                    data: [15, 15, 20, 20],
                    lineStyle: {
                        color: 'rgba(141, 211, 199, 1)',
                        type: 'dashed'
                    },
                    itemStyle: {
                        color: 'rgba(141, 211, 199, 1)'
                    },
                    showSymbol: false
                }
            ]
        };
        progressChart.setOption(progressOption);

        // Completion Chart
        const completionChart = echarts.init(document.getElementById('completion-chart'));
        const completionOption = {
            animation: false,
            series: [
                {
                    type: 'pie',
                    radius: ['60%', '80%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: false
                        }
                    },
                    data: [
                        { value: 78, name: 'Completed', itemStyle: { color: 'rgba(87, 181, 231, 1)' } },
                        { value: 22, name: 'Missed', itemStyle: { color: 'rgba(55, 65, 81, 0.5)' } }
                    ]
                }
            ]
        };
        completionChart.setOption(completionOption);

        // XP Chart
        const xpChart = echarts.init(document.getElementById('xp-chart'));
        const xpOption = {
            animation: false,
            grid: {
                top: 10,
                right: 10,
                bottom: 20,
                left: 10
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    type: 'bar',
                    data: [320, 280, 350, 200, 300, 250, 150],
                    itemStyle: {
                        color: 'rgba(251, 191, 114, 1)',
                        borderRadius: [4, 4, 0, 0]
                    }
                }
            ]
        };
        xpChart.setOption(xpOption);

        // Streak Chart
        const streakChart = echarts.init(document.getElementById('streak-chart'));
        const streakOption = {
            animation: false,
            grid: {
                top: 10,
                right: 10,
                bottom: 20,
                left: 10
            },
            xAxis: {
                type: 'category',
                data: ['Mar 30', 'Apr 2', 'Apr 5', 'Apr 8', 'Apr 11', 'Apr 13'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    data: [0, 3, 6, 9, 12, 14],
                    lineStyle: {
                        color: 'rgba(252, 141, 98, 1)'
                    },
                    itemStyle: {
                        color: 'rgba(252, 141, 98, 1)'
                    },
                    showSymbol: false,
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(252, 141, 98, 0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(252, 141, 98, 0.1)'
                                }
                            ]
                        }
                    }
                }
            ]
        };
        streakChart.setOption(streakOption);

        // Resize charts when window size changes
        window.addEventListener('resize', function() {
            progressChart.resize();
            completionChart.resize();
            xpChart.resize();
            streakChart.resize();
        });
    }
});
