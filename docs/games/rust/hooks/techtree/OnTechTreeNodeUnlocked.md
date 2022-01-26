---
hide_table_of_contents: true
---

# OnTechTreeNodeUnlocked

## Usage

* Called after a player has unlocked a blueprint in a tech tree
* No Return behavior
* Useful for automatically unlocking blueprints for team members

## Examples

```csharp title=""
void OnTechTreeNodeUnlocked(Workbench workbench, TechTreeData.NodeInstance node, BasePlayer player)
{
    Puts("OnTechTreeNodeUnlocked works!");
}
```
