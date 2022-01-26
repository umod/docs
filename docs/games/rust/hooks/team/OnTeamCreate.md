---
hide_table_of_contents: true
---

# OnTeamCreate

## Usage

* Useful for canceling team creation
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamCreate(BasePlayer player)
{
    Puts("OnTeamCreate works!");
    return null;
}
```
