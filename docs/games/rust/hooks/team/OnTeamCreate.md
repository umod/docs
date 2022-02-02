---
hide_table_of_contents: true
---

# OnTeamCreate

## Usage

* Useful for canceling team creation
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTeamCreate(BasePlayer player)
{
    Puts("OnTeamCreate works!");
    return null;
}
```
