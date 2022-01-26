---
hide_table_of_contents: true
---

# CanUnlockTechTreeNodePath

## Usage

* Called when a player is attempting to unlock a blueprint in a tech tree, after the CanUnlockTechTreeNode hook, when determining whether they have the prerequisite blueprints unlocked
* Returning true or false overrides default behavior
* Useful for customizing prerequisites without conflicting with the CanPlayerUnlock hook

## Examples

```csharp title=""
object CanUnlockTechTreeNodePath(BasePlayer player, TechTreeData.NodeInstance node, TechTreeData techTree)
{
    Puts("CanUnlockTechTreeNodePath works!");
    return null;
}
```
