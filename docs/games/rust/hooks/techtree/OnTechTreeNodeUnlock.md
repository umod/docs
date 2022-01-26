---
hide_table_of_contents: true
---

# OnTechTreeNodeUnlock

## Usage

* Called when a player is attempting to unlock a blueprint in a tech tree, after the CanUnlockTechTreeNode and CanUnlockTechTreeNodePath hooks, before the player is charged scrap
* Returning a non-null value overrides default behavior
* Useful for replacing the default behavior to charge the player a different currency, or to unlock multiple blueprints at once (such as those leading up to the one selected)

## Examples

```csharp title=""
object OnTechTreeNodeUnlock(Workbench workbench, TechTreeData.NodeInstance node, BasePlayer player)
{
    Puts("OnTechTreeNodeUnlock works!");
    return null;
}
```
