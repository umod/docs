---
hide_table_of_contents: true
---

# CanUnlockTechTreeNode

## Usage

* Called when a player is attempting to unlock a blueprint in a tech tree
* Return true or false to override default behavior
* Useful for bypassing unlock requirements or disallowing particular blueprints from being unlocked

## Examples

```csharp title=""
object CanUnlockTechTreeNode(BasePlayer player, TechTreeData.NodeInstance node, TechTreeData techTree)
{
    Puts("CanUnlockTechTreeNode works!");
    return null;
}
```
