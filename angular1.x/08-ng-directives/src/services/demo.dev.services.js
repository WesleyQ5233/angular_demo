angular.module("demo.dev.services", [])
    .service("menuService", function () {

        this.getMenu = function () {
            var menus = [
                {
                    "title": "用户管理",
                    "submenus": [
                        {
                            "title": "个人用户管理"
                        },
                        {
                            "title": "高级用户管理"
                        }
                        ,
                        {
                            "title": "VIP用户管理"
                        },
                        {
                            "title": "SVIP用户管理"
                        }
                    ]
                },
                {

                    "title": "新闻管理",
                    "submenus": [
                        {
                            "title": "国内新闻管理"
                        },
                        {
                            "title": "国际新闻管理"
                        }
                        ,
                        {
                            "title": "娱乐新闻管理"
                        },
                        {
                            "title": "体育新闻管理"
                        }
                    ]
                },

                {

                    "title": "权限管理(RBAC)",
                    "submenus": [
                        {
                            "title": "管理员管理"
                        },
                        {
                            "title": "角色管理"
                        }
                        ,
                        {
                            "title": "关系管理"
                        },
                        {
                            "title": "资源管理"
                        }
                    ]
                }
            ]
            return menus;
        }
    })